from .context import scraper 
from bs4 import BeautifulSoup
import pytest

class TestScraper:
    @pytest.fixture
    def make_soup(self):
        with open("./testfiles/20211104_jets_colts.html") as fp:
            return BeautifulSoup(fp, 'html.parser')

    def test_finds_data_tables(self, make_soup):
        assert len(scraper.find_data_tables(make_soup)) == 22

    def test_finds_away_passing(self, make_soup):
        data = scraper.find_data_tables(make_soup)
        away_passing = scraper.find_data(data[0])
        
        assert away_passing[0][0] == "Josh Johnson"