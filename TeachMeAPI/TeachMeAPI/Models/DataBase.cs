using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace TeachMeAPI.Models
{
    public class DataBase
    {
<<<<<<< HEAD
        private static readonly string CONNECTION_STRING = @"Data Source=teachme.database.windows.net;Initial Catalog=teachme-api;User ID=TeachmeAdmin;Password=********;Connect Timeout=30;Encrypt=True;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
=======
        private static readonly string CONNECTION_STRING = @"Data Source=teachme.database.windows.net;Initial Catalog=teachme-api;User ID=TeachmeAdmin;Password=Azerty12;Connect Timeout=30;Encrypt=True;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
>>>>>>> fcff10bf8c0442a51da84be4bed9e1bf5ebcf225

        public static SqlConnection GetConnection()
        {
            return new SqlConnection(DataBase.CONNECTION_STRING);
        }
    }
}