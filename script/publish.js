     //kirim pesan
    document.getElementById("kirim").onclick = cirim();
    function cirim() {
      const text = document.getElementById("pesan").value;
      if (!text) return alert("Isi pesan dulu!");

      client.publish("mymqttforproject", text);
      console.log("Dikirim:", text);
    }
