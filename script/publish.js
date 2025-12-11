const client = mqtt.connect("wss://broker.emqx.io:8084/mqtt");

    client.on("connect", () => {
      document.getElementById("status").innerText = "Status: Terkoneksi ke MQTT";
      console.log("MQTT Web Connected");
    });

    client.on("reconnect", () => {
      document.getElementById("status").innerText = "Status: Reconnecting...";
    });

    client.on("error", (err) => {
      document.getElementById("status").innerText = "Error MQTT: " + err;
    });

    // KIRIM PESAN
    document.getElementById("kirim").onclick = () => {
      const text = document.getElementById("pesan").value;
      if (!text) return alert("Isi pesan dulu!");

      client.publish("mymqttforproject", text);
      console.log("Dikirim:", text);
    };

