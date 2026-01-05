const socket = new WebSocket("ws://localhost:2210");

socket.onopen = () => {
    console.log("Connected to WSS server");
};

socket.onerror = (e) => {
    console.error("WebSocket error", e);
};

socket.onmessage = (event) => {
    console.log("Raw:", event.data);

    const data = JSON.parse(event.data);
    alert(
        "From: " + data.Player +
        "\nMessage: " + data.Message +
        "\nTime: " + new Date(data.Time * 1000)
    );
};