const storage = document.getElementById("storage");
const transfer = document.getElementById("transfer");
const hddBtn = document.getElementById("hdd");
const ssdBtn = document.getElementById("ssd");
const multiBtn = document.getElementById("multi");
const singleBtn = document.getElementById("single");

const backblaze = {
  minPaymentAmount: 7,
  storage: 0.005,
  transfer: 0.01,
  color: "red",
  getValue() {
    const storageValue = storage.value;
    const transferValue = transfer.value;
    if (
      storageValue * this.storage + transferValue * this.transfer <=
      this.minPaymentAmount
    ) {
      return this.minPaymentAmount;
    } else {
      return storageValue * this.storage + transferValue * this.transfer;
    }
  },
};

const bunny = {
  maxPaymentAmount: 10,
  storage: {
    hdd: 0.01,
    ssd: 0.02,
  },
  transfer: 0.01,
  color: "orange",
  getValue() {
    const storageValue = storage.value;
    const transferValue = transfer.value;
    if (hddBtn.checked) {
      if (
        storageValue * this.storage.hdd + transferValue * this.transfer >=
        this.maxPaymentAmount
      ) {
        return this.maxPaymentAmount;
      } else {
        return storageValue * this.storage.hdd + transferValue * this.transfer;
      }
    } else {
      if (
        storageValue * this.storage.ssd + transferValue * this.transfer >=
        this.maxPaymentAmount
      ) {
        return this.maxPaymentAmount;
      } else {
        return storageValue * this.storage.ssd + transferValue * this.transfer;
      }
    }
  },
};

const scaleway = {
  free: 75,
  storage: {
    multi: 0.06,
    single: 0.03,
  },
  transfer: 0.02,
  color: "green",
  getValue() {
    const storageValue = storage.value;
    const transferValue = transfer.value;
    const storagePI = storageValue <= this.free ? 0 : storageValue - this.free;
    const transferPI =
      transferValue <= this.free ? 0 : transferValue - this.free;

    if (multiBtn.checked) {
      return storagePI * this.storage.multi + transferPI * this.transfer;
    } else {
      return storagePI * this.storage.single + transferPI * this.transfer;
    }
  },
};

const vultr = {
  minPaymentAmount: 5,
  storage: 0.01,
  transfer: 0.01,
  color: "blue",
  getValue() {
    const storageValue = storage.value;
    const transferValue = transfer.value;
    if (
      storageValue * this.storage + transferValue * this.transfer <=
      this.minPaymentAmount
    ) {
      return this.minPaymentAmount;
    } else {
      return storageValue * this.storage + transferValue * this.transfer;
    }
  },
};

export {
  storage,
  transfer,
  hddBtn,
  ssdBtn,
  multiBtn,
  singleBtn,
  backblaze,
  bunny,
  scaleway,
  vultr,
};
