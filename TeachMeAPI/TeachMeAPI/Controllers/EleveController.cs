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
        public List<Eleve> GetAll()
        {
            return DAO.EleveDAO.Query();
        }

        public Eleve Post(Eleve user)
        {
            return DAO.EleveDAO.Insert(user);
        }
    }
}
