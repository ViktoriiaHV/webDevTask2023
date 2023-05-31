const contactFormModel = [
  [{
    type: "text",
    id: "first_name",
    name: "first_name",
    placeholder: "First Name",
    required: true,
  },
  {
    type: "text",
    id: "last_name",
    name: "last_name",
    placeholder: "Last Name",
    required: true,
  }],
  [{
    type: "tel",
    id: "phone_number",
    name: "phone_number",
    placeholder: "Phone Number",
    required: true,
  }],
  [{
    type: "text",
    id: "query",
    name: "query",
    placeholder: "What Service are you interested in?",
    required: true,
  }],
];

export default contactFormModel;
