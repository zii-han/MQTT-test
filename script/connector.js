const client = mqtt.connect("wss://broker.emqx.io:8084/mqtt");
    client.on("connect", () => {
      client.subscribe("mymqttforproject");
      document.getElementById("status").innerText = "Status: Terhubung ke MQTT";
      console.log("MQTT Web Connected");
    });
    
    //reconnect
    client.on("reconnect", () => {
      document.getElementById("status").innerText = "Status: Menghubungkan ulang...";
    });

    //error
    client.on("error", (err) => {
      document.getElementById("status").innerText = "Error MQTT: " + err;

    });
