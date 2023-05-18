const chart = document.querySelector('.chart');

async function chartBlock() {
  const response = await fetch('./data.json');
  const jsonData = await response.json();
  const chartData = jsonData;
  console.log(chartData);

  chartData.forEach((ele) => {
    const heightBlock = document.createElement('div');
    heightBlock.classList.add('chart-ele');
    const height = ele.amount;
    heightBlock.style.height = `${height * 2}px`;

    const textBlock = document.createElement('span');
    const text = ele.day;
    textBlock.innerHTML = text;

    const numBlock = document.createElement('div');
    numBlock.classList.add('chart-num');
    const num = ele.amount;
    numBlock.innerHTML = `$${num}`;

    const chartBlock = document.createElement('div');
    chartBlock.classList.add('chartBlock');
    chartBlock.appendChild(numBlock);
    chartBlock.appendChild(heightBlock);
    chartBlock.appendChild(textBlock);

    chart.appendChild(chartBlock);
  });
}

chartBlock();
