import time
import cv2
import threading
import numpy as np
import rospy
import math
from functools import wraps
import sys

from image_Tag_converter import ImgConverter
from image_Tag_converter import TagConverter

sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")
from leju import base_action

# 左转右转的动作要换成好用的


# 定义一些参数
Chest_img = None
ChestOrg = None
marker = None
chest_circle_x = None
chest_circle_y = None
Debug = 0

# 新增：任务状态管理
task_start_time = time.time()
last_tag_seen_time = time.time()
search_pattern_step = 0
max_alignment_attempts = 4  # 增加到4次
current_alignment_attempts = 0

# 新增：绿色块处理相关变量
green_block_count = 0
target_locked = False
locked_target_x = None
locked_target_y = None
position_stable_count = 0
last_stable_position = None

# 不同色块的hsv范围 - 保持您提供的HSV范围
color_range = {
    'green': [(46, 133, 83), (58, 255, 157)],
    'orange': [(9, 189, 104), (17, 255, 185)]
}


# 新增：安全的动作执行函数
def safe_action(action_name, retry_times=3, wait_time=0.5):
    """
    安全执行动作，带重试机制
    """
    for attempt in range(retry_times):
        try:
            print(f"执行动作: {action_name} (尝试 {attempt + 1}/{retry_times})")
            base_action.action(action_name)
            time.sleep(wait_time)  # 给足够时间让动作完成
            return True
        except Exception as e:
            print(f"动作执行失败: {action_name}, 错误: {e}")
            if attempt < retry_times - 1:
                print(f"等待后重试...")
                time.sleep(1.0)  # 等待更长时间再重试
            else:
                print(f"动作 {action_name} 执行失败，已达到最大重试次数")
                return False
    return False


# ******************************************改进的动作函数***********************************************
# 放下箱子 - 保持您的NewPutCubeDown
def Box_Down(n):
    for i in range(0, n):
        if not safe_action("NewPutCubeDown", wait_time=0.5):
            print("放箱子动作失败，跳过")
            break


# 后退
# 慢慢抱着块退后
def Box_Back(n):
    for i in range(0, n):
        if not safe_action("BoxBack1Run", wait_time=0.5):
            print("后退动作失败，跳过")
            break


# 快退并放下手
def Box_Back1(n):
    for i in range(0, n):
        if not safe_action("BoxBack2-1", wait_time=0.5):
            print("后退动作失败，跳过")
            break


# 慢慢退后
def Back2(n):
    for i in range(0, n):
        if not safe_action("Back2Run", wait_time=0.5):
            print("后退动作失败，跳过")
            break


# 同Back2Run
def Back1(n):
    for i in range(0, n):
        if not safe_action("Back1Run", wait_time=0.5):
            print("后退动作失败，跳过")
            break


# 前进1步
def go_fast(n):  # 快速前进一步
    for i in range(0, n):
        if not safe_action("Forwalk01", wait_time=0.5):
            print("前进动作失败，跳过")
            break


# 暂时没问题，可优化
def go_fast1(n):  # 快速前进一步
    for i in range(0, n):
        if not safe_action("FastForward1s", wait_time=0.5):
            print("前进动作失败，跳过")
            break


# 暂时没问题，可优化
def go_fast2(n):  # 快速前进两步
    for i in range(0, n):
        if not safe_action("FastForward2s", wait_time=0.5):
            print("前进动作失败，跳过")
            break


# 暂时没问题，可优化
def go_fast3(n):  # 快速前进三步
    for i in range(0, n):
        if not safe_action("FastForward3s", wait_time=0.5):
            print("前进动作失败，跳过")
            break


# 抱块前进1步，待优化，暂时同NewBoxForward1s - 保持您的NewBoxForward1s
def box_go(n):
    for i in range(0, n):
        if not safe_action("FixedBoxForward1s", wait_time=0.5):
            print("抱箱前进动作失败，跳过")
            break


def box_go1(n):  # 抱着箱子前进一步 - 保持您的NewBoxForward1s
    for i in range(0, n):
        if not safe_action("FixedBoxForward1s", wait_time=0.5):
            print("抱箱前进动作失败，跳过")
            break


def box_go2(n):  # 抱着箱子前进两步 - 保持您的NewBoxForward2s
    for i in range(0, n):
        if not safe_action("FixedBoxForward2s", wait_time=0.5):
            print("抱箱前进动作失败，跳过")
            break


def box_go3(n):  # 抱着箱子前进三步 - 保持您的NewBoxForward3s
    for i in range(0, n):
        if not safe_action("NewBoxForward3s", wait_time=0.5):
            print("抱箱前进动作失败，跳过")
            break


# 侧移#
def L_move1(n):  # 左侧移
    for i in range(0, n):
        if not safe_action("Left02move", wait_time=0.5):
            print("左移动作失败，跳过")
            break
        print('左移1.5cm')


def L_move2(n):  # 左侧移
    for i in range(0, n):
        if not safe_action('move_left', wait_time=0.5):
            print("左移动作失败，跳过")
            break


def BoxL_move1(n):  # 左侧移
    for i in range(0, n):
        if not safe_action("BoxLeft1", wait_time=0.5):
            print("抱箱左移动作失败，跳过")
            break


def BoxL_move2(n):  # 左侧移
    for i in range(0, n):
        if not safe_action('Box_move_left', wait_time=0.5):
            print("抱箱左移动作失败，跳过")
            break


def R_move1(n):  # 右侧移
    for i in range(0, n):
        if not safe_action("Right02move", wait_time=0.5):
            print("右移动作失败，跳过")
            break


def R_move2(n):  # 右侧移
    for i in range(0, n):
        if not safe_action('move_right', wait_time=0.5):
            print("右移动作失败，跳过")
            break


def BoxR_move1(n):  # 右侧移
    for i in range(0, n):
        if not safe_action("BoxRight1", wait_time=0.5):
            print("抱箱右移动作失败，跳过")
            break


def BoxR_move2(n):  # 右侧移
    for i in range(0, n):
        if not safe_action('Box_move_right', wait_time=0.5):
            print("抱箱右移动作失败，跳过")
            break


# 转向#
def L_turn1(n):  # 左转  左转7°
    for i in range(0, n):
        if not safe_action("turn003L", wait_time=0.5):
            print("左转动作失败，跳过")
            break


def L_turn2(n):
    for i in range(0, n):
        if not safe_action("LeftTurn1s", wait_time=0.5):
            print("左转动作失败，跳过")
            break


def BoxL_turn1(n):  # 左转
    for i in range(0, n):
        if not safe_action("BoxTurnL1", wait_time=0.5):
            print("抱箱左转动作失败，跳过")
            break


def BoxL_turn2(n):  # 左转
    for i in range(0, n):
        if not safe_action("BoxLeftTurn1s", wait_time=0.5):
            print("抱箱左转动作失败，跳过")
            break


def R_turn1(n):  # 右转
    for i in range(0, n):
        if not safe_action("turn003R", wait_time=0.5):
            print("右转动作失败，跳过")
            break


def R_turn2(n):  # 右转
    for i in range(0, n):
        if not safe_action("RightTurn1s", wait_time=0.5):
            print("右转动作失败，跳过")
            break


def BoxR_turn1(n):  # 右转
    for i in range(0, n):
        if not safe_action("BoxTurnR1", wait_time=0.5):
            print("抱箱右转动作失败，跳过")
            break


def BoxR_turn2(n):  # 右转
    for i in range(0, n):
        if not safe_action("BoxRightTurn1s", wait_time=0.5):
            print("抱箱右转动作失败，跳过")
            break


# 获取图像
def get_img():
    global Chest_img, ChestOrg
    global ret
    image_reader_chest = ImgConverter()
    while True:
        try:
            ret, ChestOrg = image_reader_chest.chest_image()
            time.sleep(0.3)
            if ChestOrg is not None:
                Chest_img = ChestOrg
                time.sleep(0.05)
            else:
                time.sleep(0.3)
                print("暂时未获取到图像")
        except Exception as e:
            print(f"图像获取错误: {e}")
            time.sleep(0.5)


th2 = threading.Thread(target=get_img)
th2.setDaemon(True)
th2.start()


# 改进的查找方块函数 - 解决多个绿色块时的左右调整问题
def find_box(img, color_name):
    global chest_circle_x, chest_circle_y, green_block_count, target_locked, locked_target_x, locked_target_y
    global position_stable_count, last_stable_position

    if Chest_img is None:
        print('等待获取图像中...')
        time.sleep(0.3)
        return

    try:
        box_img = img
        box_img_bgr = cv2.cvtColor(box_img, cv2.COLOR_RGB2BGR)
        box_img_hsv = cv2.cvtColor(box_img, cv2.COLOR_BGR2HSV)
        box_img = cv2.GaussianBlur(box_img_hsv, (3, 3), 0)

        # 检测绿色块
        green_mask = cv2.inRange(box_img, color_range['green'][0], color_range['green'][1])
        green_mask_processed = cv2.dilate(cv2.erode(green_mask, None, iterations=2), np.ones((4, 4), np.uint8), iterations=2)
        (green_contours, _) = cv2.findContours(green_mask_processed, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)

        # 统计绿色块数量
        valid_green_contours = []
        for cn in green_contours:
            contour_area = math.fabs(cv2.contourArea(cn))
            if contour_area > 300:  # 过滤掉太小的轮廓
                valid_green_contours.append(cn)

        green_block_count = len(valid_green_contours)
        print(f"检测到 {green_block_count} 个绿色块")

        best_contour = None
        best_color = None
        largest_area = 0

        # 多个绿色块处理策略
        if green_block_count >= 3:
            print("检测到3个或以上绿色块，启用目标锁定策略")

            if not target_locked:
                # 第一次检测到多个绿色块，选择最中心的目标
                print("选择最中心的绿色块作为目标")
                center_x = img.shape[1] / 2  # 图像中心x坐标
                min_distance_to_center = float('inf')

                for cn in valid_green_contours:
                    (block_x, block_y), _ = cv2.minEnclosingCircle(cn)
                    distance_to_center = abs(block_x - center_x)

                    if distance_to_center < min_distance_to_center:
                        min_distance_to_center = distance_to_center
                        best_contour = cn
                        locked_target_x = block_x
                        locked_target_y = block_y

                target_locked = True
                best_color = 'green'
                print(f"锁定目标位置: x={locked_target_x}, y={locked_target_y}")

            else:
                # 已锁定目标，寻找与锁定位置最接近的绿色块
                print("寻找与锁定目标最接近的绿色块")
                min_distance_to_target = float('inf')

                for cn in valid_green_contours:
                    (block_x, block_y), _ = cv2.minEnclosingCircle(cn)
                    distance_to_target = math.sqrt((block_x - locked_target_x)**2 + (block_y - locked_target_y)**2)

                    if distance_to_target < min_distance_to_target:
                        min_distance_to_target = distance_to_target
                        best_contour = cn

                best_color = 'green'

        elif green_block_count > 0:
            # 少于3个绿色块，选择最大的
            print("绿色块数量少于3个，选择最大的绿色块")
            target_locked = False  # 重置锁定状态

            for cn in valid_green_contours:
                contour_area = math.fabs(cv2.contourArea(cn))
                if contour_area > largest_area:
                    largest_area = contour_area
                    best_contour = cn
                    best_color = 'green'

        # 如果没有检测到绿色块，检测橙色块
        if best_contour is None and (color_name == 'orange' or green_block_count == 0):
            orange_mask = cv2.inRange(box_img, color_range['orange'][0], color_range['orange'][1])
            orange_mask_processed = cv2.dilate(cv2.erode(orange_mask, None, iterations=2), np.ones((4, 4), np.uint8), iterations=2)
            (orange_contours, _) = cv2.findContours(orange_mask_processed, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)

            if len(orange_contours) > 0:
                for cn in orange_contours:
                    contour_area = math.fabs(cv2.contourArea(cn))
                    if contour_area > largest_area:
                        largest_area = contour_area
                        best_contour = cn
                        best_color = 'orange'

        if best_contour is not None:
            (chest_circle_x, chest_circle_y), chest_radius = cv2.minEnclosingCircle(best_contour)
            cv2.circle(img, (int(chest_circle_x), int(chest_circle_y)), int(chest_radius), (0, 0, 255))
            print(f'目标位置 x={chest_circle_x}, y={chest_circle_y}, 颜色={best_color}')

            # 位置稳定性检测
            current_position = (int(chest_circle_x), int(chest_circle_y))
            if last_stable_position is not None:
                position_diff = abs(current_position[0] - last_stable_position[0]) + abs(current_position[1] - last_stable_position[1])
                if position_diff < 10:  # 位置变化小于10像素认为稳定
                    position_stable_count += 1
                else:
                    position_stable_count = 0
            else:
                position_stable_count = 0

            last_stable_position = current_position
            print(f"位置稳定计数: {position_stable_count}")

            if Debug:
                cv2.imshow("Box", img)
                cv2.waitKey(2000)
        else:
            print('正在寻找目标')
            target_locked = False  # 重置锁定状态
            position_stable_count = 0

    except Exception as e:
        print(f"图像处理错误: {e}")
        target_locked = False


# 改进的搬箱子函数 - 解决多个绿色块时的左右调整问题
def goto_box():
    global level, ID, target_locked, position_stable_count, green_block_count
    if chest_circle_x is None:
        print('等待获取坐标中...')
        time.sleep(0.3)
        return

    try:
        print(f"当前箱子坐标: x={chest_circle_x}, y={chest_circle_y}")
        print(f"绿色块数量: {green_block_count}, 目标锁定: {target_locked}, 位置稳定计数: {position_stable_count}")

        # 多个绿色块时的特殊处理
        if green_block_count >= 3 and target_locked:
            print("多绿色块模式：使用稳定性策略")

            # 如果位置连续稳定3次以上，优先执行抓取
            if position_stable_count >= 3:
                print("目标位置稳定，直接尝试抓取")
                # 放宽抓取条件
                if (295 <= chest_circle_x <= 345) and (300 <= chest_circle_y <= 340):
                    print("位置合适，开始抱箱子")
                    if safe_action("Forwalk01", wait_time=0.5):
                        if safe_action("FixedGrabCube", wait_time=0.5):
                            level = "end_box"
                            box_go3(2)
                            target_locked = False  # 重置锁定状态
                            return
                        else:
                            print("抓取箱子失败")
                    else:
                        print("前进动作失败")

            # 使用更大的调整步长和更宽的容忍范围
            if chest_circle_x < 285:  # 放宽左边界
                print("大幅左侧移", chest_circle_x)
                safe_action("Left3move", wait_time=0.5)
            elif chest_circle_x > 355:  # 放宽右边界
                print("大幅右侧移", chest_circle_x)
                safe_action("Right3move", wait_time=0.5)
            elif chest_circle_y < 290:  # 放宽前进条件
                print("前进", chest_circle_y)
                safe_action("FastForward1s", wait_time=0.5)
            elif chest_circle_y >= 350:  # 放宽后退条件
                print("后退", chest_circle_y)
                safe_action("Back1Run", wait_time=0.5)
            else:
                print("位置接近目标，尝试抓取")
                if safe_action("Forwalk01", wait_time=0.5):
                    if safe_action("FixedGrabCube", wait_time=0.5):
                        level = "end_box"
                        box_go3(2)
                        target_locked = False  # 重置锁定状态
                    else:
                        print("抓取箱子失败")
                else:
                    print("前进动作失败")

        else:
            # 原有的单个或少量绿色块处理逻辑
            print("常规模式：使用精确定位")
            if chest_circle_x < 275:
                print("正在左侧移", chest_circle_x)
                safe_action("Left3move", wait_time=0.5)
            elif chest_circle_x < 295:
                print("正在左侧移", chest_circle_x)
                safe_action("Left02move", wait_time=0.5)
            elif chest_circle_x > 365:
                print("正在右侧移", chest_circle_x)
                safe_action("Right3move", wait_time=0.5)
            elif chest_circle_x > 345:
                print("正在右侧移", chest_circle_x)
                safe_action("Right02move", wait_time=0.5)
            else:
                if chest_circle_y < 300:
                    print("前进", chest_circle_y)
                    safe_action("FastForward1s", wait_time=0.5)
                elif chest_circle_y >= 340:
                    print("后退", chest_circle_y)
                    safe_action("Back1Run", wait_time=0.5)
                else:
                    print("开始抱箱子")
                    if safe_action("Forwalk01", wait_time=0.5):
                        if safe_action("FixedGrabCube", wait_time=0.5):
                            level = "end_box"
                            box_go3(2)
                        else:
                            print("抓取箱子失败")
                    else:
                        print("前进动作失败")

    except Exception as e:
        print(f"搬箱子过程出错: {e}")
        target_locked = False  # 出错时重置锁定状态


# 智能搜索tag的函数
def search_for_tag():
    global search_pattern_step, last_tag_seen_time

    try:
        # 搜索模式：左右扫描 + 前后调整
        if search_pattern_step == 0:
            print("搜索模式：左转寻找tag")
            if step == 1:
                BoxL_turn1(1)
            else:
                L_turn1(1)
            search_pattern_step = 1
        elif search_pattern_step == 1:
            print("搜索模式：右转寻找tag")
            if step == 1:
                BoxR_turn1(2)
            else:
                R_turn1(2)
            search_pattern_step = 2
        elif search_pattern_step == 2:
            print("搜索模式：回到中心位置")
            if step == 1:
                BoxL_turn1(1)
            else:
                L_turn1(1)
            search_pattern_step = 3
        elif search_pattern_step == 3:
            print("搜索模式：前进寻找tag")
            if step == 1:
                box_go2(1)
            else:
                go_fast1(1)
            search_pattern_step = 4
        elif search_pattern_step == 4:
            print("搜索模式：左侧移寻找tag")
            if step == 1:
                BoxL_move1(1)
            else:
                L_move1(1)
            search_pattern_step = 5
        elif search_pattern_step == 5:
            print("搜索模式：右侧移寻找tag")
            if step == 1:
                BoxR_move1(2)
            else:
                R_move1(2)
            search_pattern_step = 6
        else:
            print("搜索模式：回到中心位置，重置搜索")
            if step == 1:
                BoxL_move1(1)
            else:
                L_move1(1)
            search_pattern_step = 0
    except Exception as e:
        print(f"搜索tag过程出错: {e}")


# 改进的tag对正函数 - 修改对正标准
def turn_to_tag(dis_x, dis_y, theta, x_offset=0, y_offset=0, theta_offset=0,
                x_threshold=0.04, y_threshold=0.03, theta_threshold=8):
    global current_alignment_attempts, last_tag_seen_time

    is_turn_done = False
    last_tag_seen_time = time.time()

    x_error = dis_x - x_offset
    y_error = dis_y - y_offset
    theta_error = theta - theta_offset

    print("ID:", marker[0], "dis_x:", dis_x, "dis_y:", dis_y, "theta:", theta)
    print("x_error:", x_error, "y_error:", y_error, "theta_error:", theta_error)
    print("对位尝试次数:", current_alignment_attempts)

    # 检查是否超过最大尝试次数（4次）
    if current_alignment_attempts >= max_alignment_attempts:
        print("对位尝试次数达到4次，判定为已对准")
        is_turn_done = True
        current_alignment_attempts = 0
        return is_turn_done

    try:
        # 优先级调整：先大角度，再距离，最后精细调整
        if step == 1:
            # 大角度调整
            if abs(theta_error) > 30:
                if theta_error > 0:
                    print("大角度左转", theta_error)
                    BoxL_turn2(1)
                else:
                    print("大角度右转", theta_error)
                    BoxR_turn2(1)
            # 距离太远，快速接近
            elif x_error > x_threshold + 0.15:
                print("快速前进接近", x_error)
                box_go3(1)
            # 距离太近，后退
            elif x_error < x_threshold - 0.05:
                print("后退调整距离", x_error)
                Box_Back(1)
            # 大的侧向偏移
            elif abs(y_error) > y_threshold + 0.04:
                if y_error > 0:
                    print("大幅左移", y_error)
                    BoxL_move2(1)
                else:
                    print("大幅右移", y_error)
                    BoxR_move2(1)
            # 角度精调
            elif abs(theta_error) > theta_threshold:
                if theta_error > 0:
                    print("精细左转", theta_error)
                    BoxL_turn1(1)
                else:
                    print("精细右转", theta_error)
                    BoxR_turn1(1)
            # 侧向精调
            elif abs(y_error) > y_threshold:
                if y_error > 0:
                    print("精细左移", y_error)
                    BoxL_move1(1)
                else:
                    print("精细右移", y_error)
                    BoxR_move1(1)
            # 距离精调
            elif x_error > x_threshold + 0.06:
                print("中等前进", x_error)
                box_go2(1)
            elif x_error > x_threshold:
                print("微调前进", x_error)
                box_go(1)
            else:
                print("对位完成！")
                is_turn_done = True
                current_alignment_attempts = 0

        elif step == 2:
            # 类似的逻辑，但使用无箱子的动作
            if abs(theta_error) > 30:
                if theta_error > 0:
                    print("大角度左转", theta_error)
                    L_turn2(1)
                else:
                    print("大角度右转", theta_error)
                    R_turn2(1)
            elif x_error > x_threshold + 0.15:
                print("快速前进接近", x_error)
                go_fast2(1)
            elif x_error < x_threshold - 0.05:
                print("后退调整距离", x_error)
                Back1(1)
            elif abs(y_error) > y_threshold + 0.04:
                if y_error > 0:
                    print("大幅左移", y_error)
                    L_move2(1)
                else:
                    print("大幅右移", y_error)
                    R_move2(1)
            elif abs(theta_error) > theta_threshold:
                if theta_error > 0:
                    print("精细左转", theta_error)
                    L_turn1(1)
                else:
                    print("精细右转", theta_error)
                    R_turn1(1)
            elif abs(y_error) > y_threshold:
                if y_error > 0:
                    print("精细左移", y_error)
                    L_move1(1)
                else:
                    print("精细右移", y_error)
                    R_move1(1)
            elif x_error > x_threshold + 0.06:
                print("中等前进", x_error)
                go_fast1(1)
            elif x_error > x_threshold:
                print("微调前进", x_error)
                go_fast(1)
            else:
                print("对位完成！")
                is_turn_done = True
                current_alignment_attempts = 0

        if not is_turn_done:
            current_alignment_attempts += 1

    except Exception as e:
        print(f"对位过程出错: {e}")
        current_alignment_attempts += 1

    return is_turn_done


if __name__ == '__main__':
    try:
        rospy.init_node('image_listener')
        Tag = TagConverter()
        time.sleep(0.5)
        ID = 0
        step = 1
        level = "start_box"
        time.sleep(5)

        while ChestOrg is None:
            print('等待图像初始化...')
            time.sleep(0.1)

        print('系统启动，开始执行任务')
        go_fast2(1)

        while not rospy.is_shutdown():
            try:
                current_time = time.time()

                if ID == 0:  # 搬箱子阶段
                    if level == "start_box":
                        find_box(Chest_img, 'green')
                        goto_box()
                        time.sleep(0.2)  # 增加等待时间
                    elif level == "end_box":
                        if step == 1:
                            box_go2(2)
                            BoxR_turn2(1)
                        elif step == 2:
                            BoxR_turn2(3)
                            step = 1
                        ID += 1
                        search_pattern_step = 0
                else:
                    marker = Tag.get_nearest_marker()

                    if len(marker) == 0:
                        print("未检测到tag")

                        # 检查是否长时间没有看到tag（超过3秒）
                        if current_time - last_tag_seen_time > 3.0:
                            print("长时间未检测到tag，启动智能搜索")
                            search_for_tag()
                        else:
                            # 根据当前状态选择合适的动作
                            if (ID == 1 and level == "end_box"):
                                print("继续右转寻找tag")
                                BoxR_turn1(1)
                            elif (ID in [1, 3, 5] and level == "start_moving") or (
                                    ID == 5 and step == 1):  # 修改：只处理1,3,5号tag
                                print("微调位置寻找tag")
                                if search_pattern_step % 2 == 0:
                                    if step == 1:
                                        BoxL_turn1(1)
                                    else:
                                        L_turn1(1)
                                else:
                                    if step == 1:
                                        BoxR_turn1(1)
                                    else:
                                        R_turn1(1)
                                search_pattern_step += 1
                            elif (ID == 5 and step == 2 and level == "start_moving"):
                                print("右转寻找tag")
                                R_turn1(1)
                            elif (ID in [6, 7]) or (ID == 5 and step == 2 and level == "reverse_moving"):
                                print("微调位置寻找tag")
                                if search_pattern_step % 2 == 0:
                                    L_turn1(1)
                                else:
                                    R_turn1(1)
                                search_pattern_step += 1

                    else:
                        # 检测到tag，重置搜索状态
                        search_pattern_step = 0
                        last_tag_seen_time = current_time

                        robot_tag_x = marker[1]
                        robot_tag_y = marker[2]
                        tag_yaw = marker[3] + 90

                        if step == 1:
                            if marker[0] == 1:
                                if ID == 1:
                                    level = "start_moving"
                                    result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.08, 0.0, 2)
                                    if result == True:
                                        print('一号tag对正完毕，直接前进跳过2号tag寻找三号tag')
                                        ID = 3  # 直接跳到3号tag
                                        # 执行您要求的动作序列
                                        box_go3(3)  # 执行4次box_go3
                                        BoxR_move2(5)  # 执行5次最大右移
                                else:
                                    print("继续前进")
                                    box_go1(1)

                            # 删除tag2和tag4的处理逻辑
                            elif marker[0] == 3:
                                if ID == 3:
                                    result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.12, 0.11, 0)
                                    if result == True:
                                        print('三号tag对正完毕，执行右移和前进寻找五号tag')
                                        ID = 5  # 直接跳到5号tag
                                        # 执行您要求的动作序列
                                        BoxR_move2(2)  # 执行2次最大右移
                                        box_go3(4)  # 执行4次box_go3
                                        BoxL_move2(5)  # 执行5次最大左移
                                else:
                                    print("继续右移")
                                    BoxR_move1(1)

                            elif marker[0] == 5:
                                if ID == 5:
                                    result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.12, 0.0, 0)
                                    if result == True:
                                        print('五号tag对正完毕，前进到大本营放下物块')
                                        box_go3(3)
                                        Box_Down(1)
                                        R_turn2(3)
                                        step = 2
                                        search_pattern_step = 0

                        elif step == 2:
                            # 反方向行进 - 后面的不修改
                            if marker[0] == 5:
                                result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.08, 0.0, 180)
                                level = "reverse_moving"
                                if result == True:
                                    print('五号tag反向对正完毕，前进寻找六号tag')
                                    ID += 1
                                    go_fast2(1)
                                    go_fast1(2)
                            elif marker[0] == 6:
                                if ID == 6:
                                    result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.05, -0.1, 0)
                                    if result == True:
                                        print('六号tag对正完毕，左移并前进寻找七号tag')
                                        ID += 1
                                        L_move2(4)
                                        go_fast2(2)
                                        go_fast1(1)

                            elif marker[0] == 7:
                                if ID == 7:
                                    result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.06, 0.10, 0)
                                    if result == True:
                                        print('七号tag对正完毕，右移寻找一号tag')
                                        R_move2(5)
                            elif marker[0] == 1:
                                result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.1, 0.0, 180)
                                if result == True:
                                    print('一号tag反向对正完毕，前进抓取新物块')
                                    go_fast2(2)
                                    ID = 0
                                    level = "start_box"
                                    search_pattern_step = 0

                time.sleep(0.2)  # 增加主循环的等待时间

            except Exception as e:
                print(f"主循环出错: {e}")
                time.sleep(1.0)  # 出错时等待更长时间

    except Exception as e:
        print(f"程序初始化出错: {e}")
