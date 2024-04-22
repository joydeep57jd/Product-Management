using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Product_Management.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Product_Management.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        public ProductDbContext DbContext;
        public ProductController(ProductDbContext productDbContext)
        {
            DbContext = productDbContext;
        }

        [HttpPost]
        public ActionResult<Products> AddProduct([FromBody] Products products)
        {
            DbContext.Products.Add(products);
            DbContext.SaveChanges();
            return products;
        }

        [HttpPut]
        public ActionResult<Products> UpdateProduct([FromForm] Products products)
        {
            DbContext.SaveChanges();
            return products;
        }

        [HttpGet]
        public ActionResult<List<Products>> GetAllProducts()
        {
            var res = DbContext.Products.ToList();
            return res;
        }

        [HttpGet]
        public ActionResult<Products> GetProductById(long id, string constr)
        {
            var res = DbContext.Products.Where(a => a.ProductId == id).FirstOrDefault();
            return res;
        }

        [HttpDelete]
        public ActionResult<bool> RemoveProductById(long id)
        {
            var res = DbContext.Products.Where(a => a.ProductId == id).FirstOrDefault();
            DbContext.Products.Remove(res);
            DbContext.SaveChanges();
            return true;
        }
    }
}
