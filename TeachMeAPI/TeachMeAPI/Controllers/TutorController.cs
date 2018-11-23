using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TeachMeAPI.Models;

namespace TeachMeAPI.Controllers
{
    [Authorize]
    public class TutorController : ApiController
    {
        public List<Tutor> GetAll()
        {
            return DAO.TutorDAO.Query();
        }

        public Tutor Post(Tutor user)
        {
            return DAO.TutorDAO.Insert(user);
        }

        public Tutor Get(int id)
        {
            return DAO.TutorDAO.Get(id);
        }

        public bool Get(String password)
        {
            return DAO.TutorDAO.Get(password);
        }

        public IHttpActionResult Delete(int idTutor)
        {
            if (DAO.TutorDAO.Delete(idTutor))
            {
                return Ok();
            }
            return BadRequest();
        }

        public IHttpActionResult Put(Tutor tutor)
        {
            if (DAO.TutorDAO.Update(tutor))
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
