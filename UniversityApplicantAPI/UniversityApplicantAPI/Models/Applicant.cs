using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using UniversityApplicantAPI.Enums;

namespace UniversityApplicantAPI.Models
{
    public class Applicant
    {
        [Key]
        public Guid Id { get; set; }
        public string Fname { get; set; }
        public string Lname { get; set; }
        public DateTime BirthDate { get; set; }
        public int? Age { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public eGenderType Gender { get; set; }
        public string PhoneNo { get; set; }
        public eMaritalStatus MaritalStatus { get; set; }

        public virtual List<ApplicantEducation> ApplicantEducations { get; }

    }
}