namespace UniversityApplicantAPI.Models
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Globalization;
    using System.Linq;
    using UniversityApplicantAPI.Enums;

    public class ApplicantDB : DbContext
    {
        public ApplicantDB()
            : base("name=ApplicantDB")
        {
        }
        public virtual DbSet<Applicant> Applicants { get; set; }
    }

    public class ApplicantDBInitializer : DropCreateDatabaseAlways<ApplicantDB>
    {
        protected override void Seed(ApplicantDB context)
        {
            context.Applicants.AddRange(SeedApplicants());
            base.Seed(context);
        }

        private IList<Applicant> SeedApplicants()
        {
            CultureInfo provider = CultureInfo.InvariantCulture;
            IList<Applicant> Applicants = new List<Applicant>();
            Applicants.Add(new Applicant()
            {
                Id = Guid.NewGuid(),
                Fname = "Sherif",
                Lname = "Elgohary",
                BirthDate = DateTime.ParseExact("08-21-1993", "MM-dd-yyyy", provider),
                Country = "Egypt",
                City = "Cairo",
                Address = "11 Wall st",
                Gender = eGenderType.Male,
                PhoneNo = "01099316592",
                MaritalStatus = eMaritalStatus.Single
            });

            Applicants.Add(new Applicant()
            {
                Id = Guid.NewGuid(),
                Fname = "Ahmed",
                Lname = "Ali",
                BirthDate = DateTime.ParseExact("10-03-1992", "MM-dd-yyyy", provider),
                Country = "Egypt",
                City = "Mansoura",
                Address = "19 Tiger st",
                Gender = eGenderType.Male,
                PhoneNo = "01012549530",
                MaritalStatus = eMaritalStatus.Married
            });

            Applicants.Add(new Applicant()
            {
                Id = Guid.NewGuid(),
                Fname = "Reem",
                Lname = "Nasser",
                BirthDate = DateTime.ParseExact("02-14-1995", "MM-dd-yyyy", provider),
                Country = "Egypt",
                City = "Zagazig",
                Address = "05 Bosta st",
                Gender = eGenderType.Male,
                PhoneNo = "01077885431",
                MaritalStatus = eMaritalStatus.Single
            });

            return Applicants;
        }
    }
}