async function fetchStats(){
  const res = await fetch("https://YOUR_BACKEND_URL/api/youtube");
  const data = await res.json();
  document.getElementById("subs").innerText =
    Number(data.subs).toLocaleString();
  document.getElementById("views").innerText =
    Number(data.views).toLocaleString();
}
fetchStats();
setInterval(fetchStats,30000);
