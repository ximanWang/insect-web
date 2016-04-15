<div id="box">
	<div id="test" ></div>
</div>


<script type="text/javascript">
    
$("#test").diyUpload({
	url:'insectPictures/upload',
	success:function( data ) {
		console.info( data );
	},
	error:function( err ) {
		console.info( err );	
	}
});

</script>