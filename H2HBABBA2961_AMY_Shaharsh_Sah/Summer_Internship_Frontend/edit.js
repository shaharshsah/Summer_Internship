const body = document.querySelector("body");
const editModal = document.querySelector("#modalWrapper1");
const cancelText = document.querySelector("#cancel-modal1");
const clearField = document.querySelector("#reset-modal-field1");
const saveInvoiceBtn = document.querySelector("#save-modal-field1");
const form = document.querySelector("#modal-form1");

const handleAddPress = () => {
  document.querySelector("#btn-edit").addEventListener("click", (e) => {
    body.style.overflow = "hidden";
    editModal.style.display = "unset";
  });
};
const handleClosePress = () => {
  document.querySelector("#cancel-modal1").addEventListener("click", (e) => {
    editModal.style.display = "none"; body.style.overflow = "scroll";
  });
  document.querySelector("#close-modal-btn1").addEventListener("click", (e) => {
    editModal.style.display = "none"; body.style.overflow = "scroll";
  });
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
  saveInvoiceBtn.addEventListener("click", () => {
    ;
    let invoiceAmount = document.querySelector("#invoiceAmount1").value;
    let notes = document.querySelector("#nodes1").value;
    let editModalParams1 = {
     
      invoiceAmount,
      notes,
    };

    console.log(editModalParams1);
  });
};

const driver = () => {
  handleAddPress();
  handleClosePress();
  clearFields();
};

driver();
