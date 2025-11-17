import formModel from "../models/form.model.js";

export const postForm = async(req,res)=>{
  const { fullName,email,phoneNumber,collegeName,whatsappNumber,studies } = req.body;

  try {
    const newForm = new formModel({
      fullName,
      email,
      phoneNumber,
      collegeName,
      whatsappNumber,
      studies
    });
    await newForm.save();

    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ message: "Server error" });
  }
}

export const getData = async(req,res)=>{
  try {
    const forms = await formModel.find();
    res.status(200).json(forms);
  } catch (error) {
    console.error("Error fetching forms:", error);
    res.status(500).json({ message: "Server error" });
  }
}