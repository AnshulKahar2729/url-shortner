const resultDiv = document.getElementById("result");
const text = Array.from(document.getElementsByClassName("text"))[0];

const button = document.querySelector("button");

button.addEventListener("click", async (event) => {
  event.preventDefault();
  const URL = document.querySelector("input").value;

  console.log(URL);

  const response = await fetch("http://localhost:8000/url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: URL }),
  });

  const data = await response.json();

  const shortId = data.id;

  console.log(data);

  if (response.status === 400) {
    text.innerHTML = `<p>Something went wrong. Please try again later.</p>`
    return;
  } else if (response.status === 201) {
    resultDiv.innerHTML = `http://localhost:8000/${shortId}`;
    resultDiv.setAttribute("href", `http://localhost:8000/${shortId}`)
  }
});
