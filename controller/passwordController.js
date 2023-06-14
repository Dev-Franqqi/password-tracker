
const PasswordEntry = require("../schema/PasswordSchema")
const getEntries= async (req,res)=>{

    try {
        // Retrieve all books from the collection
        const passwordentries = await PasswordEntry.find();
    
        res.status(200).json(passwordentries);
      } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve Password Entries' });
      }
    };
    

    const createEntry = async (req, res) => {
          const emptyField = []
          const {website ,username, password  } = req.body;



        try {
      
          // Check if any required field is empty

          if (!website) {
            emptyField.push('website');
          }
          
          if (!username) {
            emptyField.push('username');
          }
          
          if (!password) {
            emptyField.push('password');
          }
          
         
          
          const newPasswordEntry = new PasswordEntry({
            website,
            username,
            password
           
          });
      
          // Save the book to the database
          await newPasswordEntry.save();
      
          res.status(201).json({ message: 'new password added successfully' ,newPasswordEntry});
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: 'Please fill all fields', emptyField });
        }
      };
      
      

      const deleteEntry = async (req, res) => {
        try {
          const passwordentry = req.params.id;
      
          // Find the book by ID and delete it
          const deletedBook = await PasswordEntry.deleteOne({ _id: passwordentry });
      
          // Check if a book was deleted
          if (deletedBook.deletedCount === 0) {
            return res.status(404).json({ message: 'passwordentry not found' });
          }
      
          res.status(200).json({ message: 'Password entry deleted succesfully' });
        } catch (error) {
          res.status(500).json({ message: 'Failed to delete Password Entry' });
        }
      };
      
    

  module.exports = {
    getEntries,
    createEntry,
    deleteEntry,
  }