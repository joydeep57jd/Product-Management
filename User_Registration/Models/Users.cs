using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace User_Registration.Models
{
    /// <summary>
    /// User Details
    /// </summary>
    [Table("User_Data")]
    public class Users
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LasttName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }    
        public int IsActive { get; set; }
    }

    /// <summary>
    /// Carrer Details
    /// </summary>    
    [Table("User_Contact")]
    public class UserContacts
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ContactId { get; set; }
        public int UserId { get; set; }
        public string Phone { get; set; }
    }

    /// <summary>
    /// Carrer Details
    /// </summary>    
    [Table("User_Career")]
    public class CareerDetails
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CarrerId { get; set; }
        public int UserId { get; set; }
        public string Grade10 { get; set; }
        public string Grade12 { get; set; }
        public string Graduate { get; set; }
        public string PostGrad { get; set; }
        public string WorkEx { get; set; }
        public string CurrTechnology { get; set; }
    }
}
