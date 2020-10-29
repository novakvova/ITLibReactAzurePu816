﻿using System.ComponentModel.DataAnnotations;

namespace LibIT.Web.Models
{
    public class UserLoginViewModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class UserRegisterViewModel
    {
        public string Email { get; set; }
        public string Phone { get; set; }
        public string ImageBase64 { get; set; }
        public string Password { get; set; }
    }

    public class ForgotPasswordModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }



    /// <summary>
    /// Інформація про одного користувача
    /// </summary>
    public class UserItemViewModel
    {
        public long Id { get; set; }
        public string Email { get; set; }
        public string Image { get; set; }
        public bool EmailConfirmed { get; set; }
        public int Age { get; set; }
    }

    /// <summary>
    /// Детальна інформація про користувача
    /// </summary>
    public class UserDetailViewModel
    {
        public long Id { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Image { get; set; }
        public bool EmailConfirmed { get; set; }
        public int Age { get; set; }
    }

    /// <summary>
    /// Редагувати користувача
    /// </summary>
    public class UserEditViewModel
    {
        public long Id { get; set; }
        public string Phone { get; set; }
        public string Image { get; set; }
        /// <summary>
        /// Якщо користувач змінює фото
        /// </summary>
        public string ImageBase64 { get; set; }
        public int Age { get; set; }
    }
}