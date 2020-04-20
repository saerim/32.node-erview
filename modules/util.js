const alert = (msg) => {
	return `<script>
	alert("${msg}");
	</script>`
}

const alertLoc = (msg, loc) => {
	return `<script>
	alert("${msg}");
	lacation.href = "${loc}";
	</script>`
}



module.exports = {	alert, alertLoc	}