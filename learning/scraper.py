def find_data_tables(soup):
   return soup.find_all("table", class_="mod-data")

def find_data(dt):
   rows = dt.find_all("tr")[1:-1]
   data = []
   for row in rows:
      d = []
      cell_data = [str(x.string) for x in row.find_all("td")]
      # the name of the player is nested in an anchor and span tag
      cell_data[0] = row.find("td").a.span.string
      data.append(cell_data)

   return data