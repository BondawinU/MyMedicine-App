<script type="text/javascript" src="cordova.js"></script>
<script type="text/javascript" src="js/neu.js"></script>
<script type="text/javascript">
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      capturePhoto();
    }
    function capturePhoto() {
      navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });
    }
</script>
