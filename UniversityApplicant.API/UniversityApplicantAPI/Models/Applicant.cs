using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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
        public string Email { get; set; }
        public DateTime BirthDate { get; set; }
        [NotMapped]
        public int? Age { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public eGenderType Gender { get; set; }
        public string PhoneNo { get; set; }
        public eMaritalStatus MaritalStatus { get; set; }
        public string SchoolName { get; set; }
        public int GraduationYear { get; set; }
        public eGrade? Grade { get; set; }
        public string ApplicantResume { get; set; }
    }
}