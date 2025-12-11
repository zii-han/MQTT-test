    // KIRIM PESAN
    function sent() {
      const text = document.getElementById("pesan").value;
      if (!text) return alert("Isi pesan dulu!");

      client.publish("mymqttforproject", text);
      console.log("Dikirim:", text);
    }
