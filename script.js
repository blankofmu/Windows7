<!DOCTYPE html>
<html>
<head>
    <!-- 引入之前提供的 win7.css -->
    <link rel="stylesheet" href="win7.css">
    <style>
        /* 简单补充一下任务栏的HTML结构样式 */
        #taskbar-apps { display: flex; align-items: center; padding-left: 10px; flex-grow: 1; }
    </style>
</head>
<body>

    <!-- 开始菜单 (默认隐藏) -->
    <div id="start-menu" class="start-menu" style="display:none; position:absolute; bottom:44px; left:0; width:400px; height:500px; background:#f0f0f0; border:1px solid blue; z-index:9998;">
        <div style="padding:20px;">开始菜单内容</div>
    </div>

    <!-- 任务栏 -->
    <div class="win7-taskbar">
        <button id="start-btn" class="win7-start-btn">开始</button>
        <div id="taskbar-apps"></div> <!-- JS会自动在这里生成任务栏图标 -->
        <div class="win7-tray" id="clock">12:00</div>
    </div>

    <!-- 引入上面的 JS 代码 -->
    <script src="win7-ui.js"></script>
</body>
</html>
