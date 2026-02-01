import "@frc-web-components/fwc"

console.log("??!!")

const client = document.querySelector('nt4-client');

// 監聽連線事件
client.addEventListener('nt-connect', () => {
  console.log("✅ 成功連接到 NetworkTables!");
});

client.addEventListener('nt-disconnect', () => {
  console.log("❌ 與 NetworkTables 斷開連線...");
});

// 每三秒印一次目前的狀態
setInterval(() => {
  console.log("當前連線狀態:", client.connected ? "已連線" : "斷線");
}, 3000);