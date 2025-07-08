import moment from "moment/moment"

class DateHelper {
  constructor(date) {
    this.date = moment(date)
  }

  addYears(years) {
    this.date.add(years, "years")
    return this
  }

  subtractYears(years) {
    this.date.subtract(years, "years")
    return this
  }

  addMonths(months) {
    this.date.add(months, "months")
    return this
  }

  subtractMonths(months) {
    this.date.subtract(months, "months")
    return this
  }

  addDays(days) {
    this.date.add(days, "days")
    return this
  }

  subtractDays(days) {
    this.date.subtract(days, "days")
    return this
  }

  addHours(hours) {
    this.date.add(hours, "hours")
    return this
  }

  subtractHours(hours) {
    this.date.subtract(hours, "hours")
    return this
  }

  addMinutes(minutes) {
    this.date.add(minutes, "minutes")
    return this
  }

  subtractMinutes(minutes) {
    this.date.subtract(minutes, "minutes")
    return this
  }

  addSeconds(seconds) {
    this.date.add(seconds, "seconds")
    return this
  }

  subtractSeconds(seconds) {
    this.date.subtract(seconds, "seconds")
    return this
  }

  toDate() {
    return this.date.toDate()
  }
}
function formatDate(date, format = "YYYY-MM-DD") {
  return moment(date).format(format)
}
function createFormData(data) {
  const formData = new FormData()

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key]

      if (Array.isArray(value)) {
        for (const item of value) {
          formData.append(key, item)
        }
      } else if (value instanceof FileList) {
        for (const item of value) {
          formData.append(key, item)
        }
      } else if (typeof value === "Object") {
        formData.append(key, JSON.stringify(value))
      } else value && formData.append(key, value)
    }
  }

  return formData
}
function objectToQueryString(obj) {
  return Object.keys(obj)
    .filter(key => obj[key])
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&")
}

const getCurrentURLParameters = () => {
  const searchParams = new URLSearchParams(window.location.search)
  const params = {}
  for (const [key, value] of searchParams) {
    params[key] = value
  }
  return params
}
const getURLQuery = () => {
  const searchParams = new URLSearchParams(window.location.search)
  const params = {}
  for (const [key, value] of searchParams) {
    params[key] = value
  }
  return params
}
const copyToClipboard = text => {
  const textarea = document.createElement("textarea")
  textarea.value = text
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  document.body.removeChild(textarea)
}
const getRandomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`
}
const getAsBool = value => {
  return value == "true" || value == "True"
}
const formattedPrice = price => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD", // Adjust the currency code as needed
    minimumFractionDigits: 0
  })
}
function TypeCheck(value) {
  return {
    isUndefined: () => typeof value === "undefined",
    isNull: () => value === null,
    isBoolean: () => typeof value === "boolean",
    isNumber: () => typeof value === "number",
    isString: () => typeof value === "string",
    isObject: () => typeof value === "object",
    isArray: () => Array.isArray(value),
    isObjectNotArray: () => typeof value === "object" && !Array.isArray(value),
    isFunction: () => typeof value === "function",
    isSymbol: () => typeof value === "symbol",
    isBigInt: () => typeof value === "bigint"
  }
}
function groupPricingByDate(pricing) {
  const groupedPricing = {};

  // Group adult pricing by date range
  pricing.adult.forEach((adult) => {
    const key = `${adult.from} - ${adult.to}`;
    if (!groupedPricing[key]) {
      groupedPricing[key] = { adults: [], children: [] };
    }
    groupedPricing[key].adults.push(adult);
  });

  // Group children pricing by date range
  pricing.children.forEach((child) => {
    const key = `${child.from} - ${child.to}`;
    if (!groupedPricing[key]) {
      groupedPricing[key] = { adults: [], children: [] };
    }
    groupedPricing[key].children.push(child);
  });

  return groupedPricing;
}

const extractId = dataObj => {
  if (TypeCheck().isObjectNotArray(dataObj)) return dataObj._id
  else return dataObj
}
const getChangedValues = (initialValues, currentValues) => {
  return Object.keys(currentValues).reduce((acc, key) => {
    if (currentValues[key] !== initialValues[key]) {
      acc[key] = currentValues[key];
    }
    return acc;
  }, {});
};

  const isValidDate = (value) => {
    if (!value) return false; // Ensure the value exists
  
    // Convert the value to a Date object
    const date = new Date(value);
  
    // Ensure the date is valid
    if (isNaN(date.getTime())) return false;
  
    // Format the date to YYYY-MM-DD
    const formattedDate = date.toISOString().split("T")[0];
  
    // Check if the formatted date matches the desired format
    return /^\d{4}-\d{2}-\d{2}$/.test(formattedDate);
  };
  
  const types = {
    videos: [".mp4", ".avi", ".webm", ".mov"],
    images: [".jpeg", ".jpg", "png", "gif"],
    audios: [".wav", ".mp3", ".m4a"]
}
function checkMediaType(file) {
    if (!file) {
        return null
    }
    file = file?.toLowerCase()
    if (types["videos"].some(x => file?.endsWith(x))) return "video"
    else if (types["images"].some(x => file?.endsWith(x))) return "image"
    else if (types["audios"].some(x => file?.endsWith(x))) return "audio"
    else if (file?.endsWith(".pdf")) return "pdf"
    else return "file"
}

const statusStyles = {
    "On Route": {
      text: "text-[var(--csuccess)]",
      bg: "bg-[var(--bgsuccess)]",
    },
    "Active": {
      text: "text-[var(--csuccess)]",
      bg: "bg-[var(--bgsuccess)]",
    },
    "Verified": {
      text: "text-[var(--csuccess)]",
      bg: "bg-[var(--bgsuccess)]",
    },
    "Present": {
      text: "text-[var(--csuccess)]",
      bg: "bg-[var(--bgsuccess)]",
    },
    "Resolved": {
      text: "text-[var(--csuccess)]",
      bg: "bg-[var(--bgsuccess)]",
    },
    "Hiring": {
      text: "text-[var(--csuccess)]",
      bg: "bg-[var(--bgsuccess)]",
    },
    "Confirmed": {
      text: "text-[var(--csuccess)]",
      bg: "bg-[var(--bgsuccess)]",
    },
    "On Schedule": {
      text: "text-[var(--csuccess)]",
      bg: "bg-[var(--bgsuccess)]",
    },
    "Paid": {
      text: "text-[var(--csuccess)]",
      bg: "bg-[var(--bgsuccess)]",
    },
    "Delayed": {
      text: "text-[var(--cwarning)]",
      bg: "bg-[var(--bgwarning)]",
    },
    "In Active": {
      text: "text-[var(--cwarning)]",
      bg: "bg-[var(--bgwarning)]",
    },
    "On Leave": {
      text: "text-[var(--cwarning)]",
      bg: "bg-[var(--bgwarning)]",
    },
    "In Review": {
      text: "text-[var(--cwarning)]",
      bg: "bg-[var(--bgwarning)]",
    },
    "Pending": {
      text: "text-[var(--cwarning)]",
      bg: "bg-[var(--bgwarning)]",
    },
    "Interviewing": {
      text: "text-[var(--cwarning)]",
      bg: "bg-[var(--bgwarning)]",
    },
    "Due Soon": {
      text: "text-[var(--cwarning)]",
      bg: "bg-[var(--bgwarning)]",
    },
    "Pending": {
      text: "text-[var(--cwarning)]",
      bg: "bg-[var(--bgwarning)]",
    },
    "Scheduled": {
      text: "text-[var(--catblue)]",
      bg: "bg-[var(--bgatblue)]",
    },
    "Screening": {
      text: "text-[var(--catblue)]",
      bg: "bg-[var(--bgatblue)]",
    },
    "Not Verified": {
      text: "text-[var(--cdanger)]",
      bg: "bg-[var(--bgdanger)]",
    },
    "Unresolved": {
      text: "text-[var(--cdanger)]",
      bg: "bg-[var(--bgdanger)]",
    },
    "Draft": {
      text: "text-[var(--cdanger)]",
      bg: "bg-[var(--bgdanger)]",
    },
    "Rejected": {
      text: "text-[var(--cdanger)]",
      bg: "bg-[var(--bgdanger)]",
    },
    "Overdue": {
      text: "text-[var(--cdanger)]",
      bg: "bg-[var(--bgdanger)]",
    },
    "Expiring": {
      text: "text-[var(--cdanger)]",
      bg: "bg-[var(--bgdanger)]",
    },
  };



export {
  createFormData,
  DateHelper,
  formatDate,
  objectToQueryString,
  getCurrentURLParameters,
  copyToClipboard,
  getRandomColor,
  getAsBool,
  formattedPrice,
  TypeCheck,
  extractId,
  groupPricingByDate,
  getChangedValues,
  isValidDate,
  checkMediaType,
  statusStyles,
}
