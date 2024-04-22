using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using User_Registration.Models;

namespace User_Registration.Services
{
    public class RegistrationServices : IRegistrationServices
    {

        private readonly UserDBContext _context;
        public RegistrationServices(UserDBContext context)
        {
            _context = context;
        }

        public ResponseModel DeleteUser(int userId)
        {
            throw new NotImplementedException();
        }

        public Users GetUserDetailsById(int userId)
        {
            Users user;
            try
            {
                user = _context.Find<Users>(userId);
            }
            catch (Exception)
            {
                throw;
            }
            return user;
        }

        public List<Users> GetUsersList()
        {
            List<Users> userList;
            try
            {
                userList = _context.Set<Users>().ToList();
            }
            catch (Exception)
            {
                throw;
            }
            return userList;
        }

        public ResponseModel SaveUser(Users userModel)
        {
            ResponseModel model = new ResponseModel();
            try
            {
                Users _temp = GetUserDetailsById(userModel.UserId);
                if (_temp != null)
                {
                    _temp.FirstName = userModel.FirstName;
                    _temp.LasttName = userModel.LasttName;
                    _temp.Password = userModel.Password;
                    _temp.Email = userModel.Email;
                    _temp.IsActive = userModel.IsActive;
                    _context.Update<Users>(_temp);
                    model.Messsage = "User Update Successfully";
                }
                else
                {
                    _context.Add<Users>(userModel);
                    model.Messsage = "Users Inserted Successfully";
                }
                _context.SaveChanges();
                model.IsSuccess = true;
            }
            catch (Exception ex)
            {
                model.IsSuccess = false;
                model.Messsage = "Error : " + ex.Message;
            }
            return model;
        }
    }
}
