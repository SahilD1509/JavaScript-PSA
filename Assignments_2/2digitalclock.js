<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<h1 id="clock" class="text-center mt-5"></h1>
<script>
  setInterval(() => {
    document.getElementById("clock").innerText = new Date().toLocaleTimeString();
  }, 1000);
</script>
