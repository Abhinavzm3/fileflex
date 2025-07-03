import { File } from '../models/file.models.js';
import s3 from "../config/s3.js";
import bcrypt from "bcryptjs";
import AWS from "aws-sdk";
import nodemailer from "nodemailer";
import shortid from "shortid";
import QRCode from "qrcode";
import { User } from '../models/user.models.js';
import path from "path";