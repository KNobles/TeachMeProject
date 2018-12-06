using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using TeachMeAPI.Models;
using TeachMeAPI.DAO;

namespace TeachMeAPI.Controllers
{
    [Authorize]
    public class BlackListTutorController : ApiController
    {
        
        public List<BlackListTutor> GetAll()
        {
            return BlackListTutorDAO.Query();
        }

        public BlackListTutor Post(BlackListTutor black)
        {
            return BlackListTutorDAO.Insert(black);
        }

        public BlackListTutor Get(int id)
        {
            return BlackListTutorDAO.Get(id);
        }

        public IHttpActionResult Delete(int id)
        {
            if (BlackListTutorDAO.Delete(id))
            {
                return Ok();
            }
            return BadRequest();
        }

        public IHttpActionResult Put(BlackListTutor black)
        {
            if (BlackListTutorDAO.Update(black))
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
