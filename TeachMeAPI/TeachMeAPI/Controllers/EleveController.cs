using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TeachMeAPI.Models;

namespace TeachMeAPI.Controllers
{
    
    public class EleveController : ApiController
    {
        [Authorize]
        public List<Eleve> GetAll()
        {
            return DAO.EleveDAO.Query();
        }

        public Eleve Post(Eleve user)
        {
            return DAO.EleveDAO.Insert(user);
        }

        [Authorize]
        public Eleve Get(int id)
        {
            return DAO.EleveDAO.Get(id);
        }

        [Authorize(Roles = "Administrator")]
        public bool Get(String password)
        {
            return DAO.EleveDAO.Get(password);
        }

        [Authorize(Roles = "Administrator")]
        public IHttpActionResult Delete(int idEleve)
        {
            if (DAO.EleveDAO.Delete(idEleve))
            {
                return Ok();
            }
            return BadRequest();
        }

        public IHttpActionResult Put(Eleve eleve)
        {
            if (DAO.EleveDAO.Update(eleve))
            {
                return Ok();
            }
            return BadRequest();
        }

    }
}
