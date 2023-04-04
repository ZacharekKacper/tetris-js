-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 04 Kwi 2023, 18:22
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `tetris`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `leaderboard`
--

CREATE TABLE `leaderboard` (
  `id` int(11) NOT NULL,
  `player` varchar(20) NOT NULL,
  `level` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `time` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `leaderboard`
--

INSERT INTO `leaderboard` (`id`, `player`, `level`, `score`, `time`) VALUES
(20, 'uh uh uh uh ', 0, 0, '0:03'),
(21, 'mlyn', 0, 0, '0:03'),
(22, 'guwno aha jesz guwno', 0, 0, '0:03'),
(23, 'marsjanki', 0, 0, '0:02'),
(24, 'uh u hu u hu uh u', 0, 0, '0:02'),
(25, 'mefedron', 0, 0, '0:02'),
(26, 'idk o co chodzi', 0, 0, '0:02'),
(27, 'asdasdasdasd', 0, 0, '0:05'),
(28, 'sadasd', 0, 0, '0:01'),
(29, 'rerere', 0, 0, '0:01'),
(30, 'idk o co chodzi', 0, 0, '0:02'),
(31, 'nodobra', 0, 0, '0:02'),
(32, 'krzemionka', 0, 0, '0:02'),
(33, 'asdasdasd', 0, 0, '0:02'),
(34, 'o co tu chodzi xdddd', 0, 0, '0:03'),
(35, 'j', 0, 0, '0:02'),
(36, 'asdasd', 0, 0, '0:02'),
(37, 'k', 0, 0, '0:02'),
(38, 'rabarbar', 4, 6760, '4:52'),
(39, 'dsdasdasdasdasdasdas', 0, 0, '0:01'),
(40, 'asasasas', 0, 0, '0:02'),
(41, 'a a a a a a a a aaa ', 0, 0, '0:02'),
(42, 'mlynarz', 0, 0, '0:02'),
(43, 'sadsaew', 0, 0, '0:02'),
(44, 'asdasd', 0, 0, '0:02'),
(45, 'rosol', 0, 0, '0:02'),
(46, 'weqweq', 0, 0, '0:02'),
(47, 'rerere', 0, 0, '0:02'),
(48, 'weqeqweqw', 0, 0, '0:03'),
(49, 'grzybulka', 3, 11120, '4:46');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `leaderboard`
--
ALTER TABLE `leaderboard`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `leaderboard`
--
ALTER TABLE `leaderboard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
