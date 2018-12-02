using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;

namespace TeachMeAPI.Models
{
    public class LoginResponse
    {
        internal HttpResponseMessage responseMsg;
        internal int id;
        internal string className;
        internal string role;
    }
}