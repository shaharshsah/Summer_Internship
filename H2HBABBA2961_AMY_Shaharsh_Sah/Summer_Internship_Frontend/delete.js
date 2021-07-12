const body = document.querySelector("body");
const editModal = document.querySelector("#modalWrapper2");
const deleteInvoiceBtn = document.querySelector("#delete-modal-field2");


const handleAddPress = () => {
  document.querySelector("#btn-delete").addEventListener("click", (e) => {
    body.style.overflow = "hidden";
    editModal.style.display = "unset";
  });
};
const handleClosePress = () => {
  document.querySelector("#cancel-modal-field2").addEventListener("click", (e) => {
    editModal.style.display = "none"; body.style.overflow = "scroll";
  });
  document.querySelector("#close-modal-btn2").addEventListener("click", (e) => {
    editModal.style.display = "none"; body.style.overflow = "scroll";
  });
};


const driver = () => {
  handleAddPress();
  handleClosePress();
};

driver();
