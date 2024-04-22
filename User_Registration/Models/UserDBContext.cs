using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace User_Registration.Models
{
    public class UserDBContext : DbContext
    {
        public UserDBContext(DbContextOptions options) : base(options)
        {
        }        

        public DbSet<Users> Users { get; set; }
        public DbSet<UserContacts> UserContacts { get; set; }
        public DbSet<CareerDetails> CareerDetails { get; set; }
    }
}
