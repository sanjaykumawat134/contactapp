import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BsFillPlusSquareFill, BsUpload } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import EnhancedContactForm from "@/components/ContactForm";
import axios from "axios";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <EnhancedContactForm />
    </>
  );
}
