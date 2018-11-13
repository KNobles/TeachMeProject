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
    public class AnonuncementController : ApiController
    {
        public List<Announcement> GetAll()
        {
            return AnnouncementDAO.Query();
        }

        public Announcement Post(Announcement announce)
        {
            return AnnouncementDAO.Insert(announce);
        }

        public Announcement Get(int id)
        {
            return AnnouncementDAO.Get(id);
        }

        public IHttpActionResult Delete(int id)
        {
            if (AnnouncementDAO.Delete(id))
            {
                return Ok();
            }
            return BadRequest();
        }

        public IHttpActionResult Put(Announcement announce)
        {
            if (AnnouncementDAO.Update(announce))
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
