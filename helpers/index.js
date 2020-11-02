import React from "react";

const formatBirthdate = (string) => {
  const date = new Date(string).toDateString().split(" ").slice(1).join(" ");

  return date;
};

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
}

export { formatBirthdate, formatPhoneNumber };
