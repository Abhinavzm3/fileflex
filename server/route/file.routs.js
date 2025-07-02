import express from 'express';
const app=express();

import { Router } from 'express';
import upload from '../middleware/upload.js';
import {deletefile,downloadFile,generateQR,generateShareShortenLink,getDownloadCount,getFileDetails,getUserFiles, resolveShareLink, searchFiles, sendLinkEmail, showUserFiles, updateFileExpiry, updateFilePassword, updateFileStatus, uploadFiles, verifyFilePassword ,  } from "../controller/file.controller.js";


const router=Router();

