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
    public class BlackListEleveController : ApiController
    {
        [Authorize]
        public List<BlackListEleve> GetAll()
        {
            return BlackListEleveDAO.Query();
        }

        [Authorize]
        public BlackListEleve Post(BlackListEleve black)
        {
            return BlackListEleveDAO.Insert(black);
        }
        
        [Authorize]        
        public BlackListEleve Get(int id)
        {
            return BlackListEleveDAO.Get(id);
        }

        [Authorize]
        public IHttpActionResult Delete(int id)
        {
            if (BlackListEleveDAO.Delete(id))
            {
                return Ok();
            }
            return BadRequest();
        }

        [Authorize]
        public IHttpActionResult Put(BlackListEleve black)
        {
            if (BlackListEleveDAO.Update(black))
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
