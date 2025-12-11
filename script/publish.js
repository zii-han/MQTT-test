 //kirim pesan
    document.getElementById("kirim").onclick = () => {
      const text = document.getElementById("pesan").value;
      if (!text) return alert("Isi pesan dulu!");

      client.publish("abdianjaymabar", text);
      console.log("Dikirim:", text);
    };