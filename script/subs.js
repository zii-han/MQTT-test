//pesan
    client.on("message", (topic, message) => {
      document.getElementById("pesan").innerText =
        "Pesan: " + message.toString();
    });