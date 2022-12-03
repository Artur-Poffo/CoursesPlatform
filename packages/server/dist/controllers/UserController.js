"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = __importDefault(require("../Models/UserModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const SignUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let toVerifyUser = {
        email: req.body.email,
        password: req.body.password
    };
    const EmailInUse = yield UserModel_1.default.findOne({ email: toVerifyUser.email });
    if (EmailInUse === null) {
        const hash = bcrypt_1.default.hashSync(req.body.password, 10);
        let newUser = new UserModel_1.default({
            email: req.body.email,
            password: hash,
            userName: req.body.userName,
            about: req.body.about,
            perfilImage: req.body.perfilImage,
            courses: req.body.courses
        });
        newUser.save()
            .then(() => {
            res.status(200).json({ success: true, msg: "Account Created" });
        })
            .catch((err) => {
            res.status(500).json({ success: false, error: err });
        });
    }
    else {
        res.status(500).json({ success: false, msg: "Email in Use" });
    }
});
const SignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let VerifyUser = {
        email: req.body.email,
        password: req.body.password
    };
    const searchEmail = yield UserModel_1.default.findOne({ email: VerifyUser.email });
    if (searchEmail !== null) {
        const Compare = bcrypt_1.default.compareSync(VerifyUser.password, searchEmail.password);
        if (Compare === true) {
            const secret = process.env.SECRET;
            const token = jsonwebtoken_1.default.sign({ id: searchEmail._id }, `${secret}`);
            const { email, userName, perfilImage, about, courses } = searchEmail;
            res.status(200).json({ success: true, token, user: { email, userName, perfilImage, about, courses } });
        }
        else {
            res.status(422).json({ success: false, msg: "Error on Login" });
        }
    }
    else {
        res.status(422).json({ success: false, msg: "Error on Login" });
    }
});
const updateUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const DataToUpdate = {
        userName: req.body.userName,
        about: req.body.about,
        perfilImage: req.body.perfilImage,
        headerImage: req.body.headerImage,
    };
    try {
        const updatedDatas = yield UserModel_1.default.updateOne({ _id: id }, DataToUpdate);
        res.status(200).json({ success: true, msg: "Data Updated", DataUpdated: DataToUpdate });
    }
    catch (err) {
        res.status(500).json({ success: false, msg: "Error on Update: " + err });
    }
});
const getUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let user;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        user = yield UserModel_1.default.findById(id, '-password');
    }
    if (!user) {
        return res.status(404).json({ success: false, msg: "User not found" });
    }
    res.status(200).json({ success: true, user });
});
const checkToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ success: false, msg: "Access Denied" });
    }
    try {
        const secret = process.env.SECRET;
        jsonwebtoken_1.default.verify(token, secret);
        next();
    }
    catch (err) {
        res.status(401).json({ success: false, msg: `Invalid Token ${err}` });
    }
};
exports.default = { SignUp, SignIn, updateUserData, getUserData, checkToken };
