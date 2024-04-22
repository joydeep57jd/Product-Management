using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Product_Management.Models
{
    [Table(name: "Products")]
    public class Products
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProductId { get; set; }
        public string Title { get; set; }
        public string ImageUrl { get; set; }
        public string Category { get; set; }
        public string Price { get; set; }
        public string Description { get; set; }
    }
}
