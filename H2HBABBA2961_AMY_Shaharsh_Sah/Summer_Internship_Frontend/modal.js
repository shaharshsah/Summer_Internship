const body = document.querySelector("body");
const editModal = document.querySelector("#modalWrapper");
const cancelText = document.querySelector("#cancel-modal");
const clearField = document.querySelector("#clear-modal-field");
const addInvoiceBtn = document.querySelector("#final-add-modal-field");
const form = document.querySelector("#modal-form");

const handleAddPress = () => {
  document.querySelector("#add-btn").addEventListener("click", (e) => {
    body.style.overflow = "hidden";
    editModal.style.display = "unset";
  });
};

const handleClosePress = () => {
  document.querySelector("#cancel-modal").addEventListener("click", (e) => {
    editModal.style.display = "none";
     body.style.overflow = "scroll";
  });
  document.querySelector("#close-modal-btn").addEventListener("click", (e) => {
    editModal.style.display = "none";
     body.style.overflow = "scroll";
  });
   //body.style.overflow = "scroll";
};

const clearFields = () => {
  clearField.addEventListener("click", () => {
    document.querySelectorAll("input").forEach((e) => {
      e.value = null;
    });
    document.querySelectorAll("textarea").forEach((e) => {
      e.value = null;
    });
  });
};

const handleInvoiceAddition = () => {
  addInvoiceBtn.addEventListener("click", () => {
    let customerName = document.querySelector("#customerName").value;
    let customerNo = document.querySelector("#customerNum").value;
    let invoiceNo = document.querySelector("#invoiceNo").value;
    let invoiceAmount = document.querySelector("#invoiceAmount").value;
    let dueDate = document.querySelector("#dueDate").value;
    let notes = document.querySelector("#nodes").value;
    let editModalParams = {
      customerName,
      customerNo,
      invoiceNo,
      invoiceAmount,
      dueDate,
      notes,
    };

    const table = document.getElementById('tab');
    const node = document.createElement("tr");
    node.innerHTML = `
    <td class="check-list">
    <input type = "checkbox" name=${editModalParams.customerNo}/>
    </td>
    <td>${editModalParams.customerName}</td>
    <td>${editModalParams.customerNo}</td>
    <td>${editModalParams.invoiceNo}</td>
    <td>${editModalParams.invoiceAmount}</td>
    <td>${editModalParams.dueDate}</td>
    <td>-</td>
    <td>${editModalParams.notes}</td>
   `;
   table.appendChild(node);

  editModal.style.display = "none";
     body.style.overflow = "scroll";


  });
};

const driver = () => {
  handleAddPress();
  handleClosePress();
  clearFields();
  handleInvoiceAddition();
};

driver();
