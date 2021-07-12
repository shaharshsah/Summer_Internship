

const renderNode = (data) => {
  const node = document.createElement("tr");
  node.innerHTML = `
        <td class="check-list">
          <input type="checkbox" name=${data.customerId} />
        </td>
        <td>${data.Customer_Name}</td>
        <td>${data.Customer}</td>
        <td>${data.Invoice}</td>
        <td>${data.Invoice_Amount}</td>
        <td>${data.Due_Date}</td>
        <td>${data.Predicted_Payment_Date}</td>
        <td>hero</td>
  `;
  return node;
};


const fetchData = async () => {
  let data = [];
  await fetch("./demo.json")
    .then((response) => response.json())
    .then((fetchedData) => {
      data = fetchedData;
      //console.log(data);
    });
  return data;
};

const loadTableData = async () => {
  const refNode = document.querySelector("#tab").childNodes[1];
  const sampleData = await fetchData();
  sampleData.map((sData) => {
    const dataNode = renderNode(sData);
    refNode.append(dataNode);
  });
};

loadTableData();
