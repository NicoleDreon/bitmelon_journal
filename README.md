# Bitmelon Journal

Our team was tasked with creating a journaling application and given these three requirements: keep track of melons tried, tasting notes, and other memories.

This iteration of Bitmelon Journal was built in just over a week.

## Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Documentation](#documentation)
- [Future State](#future)
- [Installation](#installation)

## <a name="tech-stack"></a>Tech Stack

- Python
- JavaScript
- HTML
- CSS
- Bootstrap
- React
- PostgreSQL
- SQLAlchemy

## <a name="features"></a>Features

### Landing Page

![landing page](https://github.com/NicoleDreon/bitmelon_journal/blob/main/static/img/homepage.png)

Already existing users can log in.

![landing page](https://github.com/NicoleDreon/bitmelon_journal/blob/main/static/img/login.png)

### User Profile

Once logged in the user is directd to their profile which displays their user information including a placeholder image, user name, and email. The user has the options to create a new journal entry, create a new memory, view past journal entries, and view past memories.

![user profile](https://github.com/NicoleDreon/bitmelon_journal/blob/main/static/img/userprofile.png)

### New Journal Entry

To add a new journal entry select the 'create journal' button. A new entry can be made once for each unique melon in the dropdown. For the selected melon the user will log their overall rating, tasting notes, and if it is a favortie.

![new journal entry](https://github.com/NicoleDreon/bitmelon_journal/blob/main/static/img/createjournal.png)

### New Memory

To make a new memory select the 'new memory' button. The user can only choose from the melons that already have a journal entry. In a memory the user can log date, location, friend they were with and their memory.

![new memory](https://github.com/NicoleDreon/bitmelon_journal/blob/main/static/img/creatememory.png)

### See Journal Entries

View all journal entries

![view journal entries](https://github.com/NicoleDreon/bitmelon_journal/blob/main/static/img/viewmemories.png)

### See Memories

View all melon memories.

![view memories](https://github.com/NicoleDreon/bitmelon_journal/blob/main/static/img/viewmemories.png)

### See Our Melons

A snapshot of all the melons avaiable at Bitmelon.

![see all melons](https://github.com/NicoleDreon/bitmelon_journal/blob/main/static/img/allmelons.png)

## <a name="future"></a>Future State

Future goals for Bitmelon Journal

- Impliment a sign up form
- Expand tasting notes on Journal Entry
  - Implement a scale of the five primary tastes and allow users to rate 1-5 for each
  - Chart above tasting notes when user views journal entries
- Ability to share/tag entries with friends
- Search bar to filter through 'See Our Melons'

## <a name="installation"></a>Installation

Run Bitmelon Journal on your own machine.

- Install PostgreSQL (Mac OSX)

- Clone or fork this repo:

```
https://github.com/NicoleDreon/bitmelon_journal.git
```

- Create and activate a virtual environment inside your Bitmelon Journal directory:

```
virtualenv env
source env/bin/activate
```

- Install dependencies:

```
pip install -r requirements.txt
```

- Set up database:

```
createdb melons
python3 model.py
```

- Run the app:

```
python3. server.py
```

- Navigate to 'localhost:5000/' to access Bitmelon Journal and start loging your melon experiences!
